import React from 'react';
import styles from './index.module.scss';

interface DataItem {
  id: number;
  tasks: string;
  completed: boolean;
}

interface Props {
  className?: string;
  data: DataItem[];
}

const Index = ({ className, data }: Props) => {
  const classProps = className ? styles[className] : styles['default'];


  return (
    <table className={classProps}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tarea</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
      {data.map((datas:DataItem) => (
          <tr key={datas.id}>
            <td>{datas.id}</td>
            <td>{datas.tasks}</td>
            <td>{datas.completed ? 'completed' : 'not completed'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;
