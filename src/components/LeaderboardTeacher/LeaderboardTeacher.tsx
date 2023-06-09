import React from 'react';

import { Leaderboard } from 'types/GroupGraph/GroupGraphType';

import LeaderboardCard from 'components/LeaderboardCard/LeaderboardCard';

import style from './LeaderboardTeacher.module.css';

type Props = {
  data: Leaderboard[];
};

export default function LeaderboardTeacher({ data }: Props) {
  if (data.length === 0 || !(data[0] as Leaderboard)?.student_id)
    return <h1>Loading</h1>;

  return (
    <div className={style['leaderboard-container']}>
      {data.map((student) => (
        <LeaderboardCard
          position={student.position}
          student_id={student.student_id}
          points={student.points}
          name={student.name}
        />
      ))}
    </div>
  );
}
