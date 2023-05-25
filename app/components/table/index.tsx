import React from 'react';
import styles from './index.module.scss';
import { classNamesInterface, TableInterface } from '../../types/index'

interface Props extends classNamesInterface, TableInterface { }

const Index = ({ className, dataTable }: Props) => {

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
      {dataTable?.map((datas:any) => (
          <tr key={datas.id}>
            <td>{datas.id}</td>
            <td>{datas.task}</td>
            <td>{datas.completed ? 'completed' : 'not completed'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Index;
