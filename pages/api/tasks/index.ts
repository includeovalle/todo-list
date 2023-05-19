import { QueryResult } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';
import { conn, writedb } from '../../../lib/db_config';
import bodyParser from 'body-parser';

const jsonParser = bodyParser.json();

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      getTasks(req, res);
      break;
    case 'POST':
      jsonParser(req, res, () => createTask(req, res));
      break;
    case 'DELETE':
      deleteTask(req, res);
      break;
    case 'PUT':
      updateTask(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

// GET /api/tasks/next13
function getTasks(req: NextApiRequest, res: NextApiResponse) {
  conn.query('SELECT * FROM tasks', function (err: Error, result: QueryResult<any>) {
    if (err) {
      console.error(err);
      res.status(500).end('Internal Server Error');
      return;
    }
    res.status(200).json(result.rows);
  });
}

// POST /api/tasks/next13
function createTask(req: NextApiRequest, res: NextApiResponse) {
  const { completed, tasks } = req.body;
  writedb.query(
    'INSERT INTO tasks (tasks, completed) VALUES ($1, $2)',
    [tasks, completed],
    function (err: Error, result: QueryResult<any>) {
      if (err) {
        console.error(err);
        res.status(500).end('Internal Server Error');
        return;
      }
      res.status(201).json({ taskId: result.rows[0]});
    }
  );
}

// DELETE /api/tasks/next13/:id
function deleteTask(req: NextApiRequest, res: NextApiResponse) {
  const taskId = req.query.id;

  conn.query('DELETE FROM tasks WHERE id = $1', [taskId], function (err: Error, result: QueryResult<any>) {
    if (err) {
      console.error(err);
      res.status(500).end('Internal Server Error');
      return;
    }
    res.status(200).send('Task deleted successfully');
  });
}

// PUT /api/tasks/next13/:id
function updateTask(req: NextApiRequest, res: NextApiResponse) {
  const taskId = req.query.id;
  const taskData = req.body;

  writedb.query(
    'UPDATE tasks SET task_name = $1, task_description = $2 WHERE id = $3',
    [taskData.taskName, taskData.taskDescription, taskId],
    function (err: Error, result: QueryResult<any>) {
      if (err) {
        console.error(err);
        res.status(500).end('Internal Server Error');
        return;
      }
      res.status(200).send('Task updated successfully');
    }
  );
}
