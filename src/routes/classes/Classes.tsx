import React, { useEffect, useState } from 'react';
import { RootState } from 'store/store';
import { useSelector, useDispatch } from 'react-redux';
import SectionHeader from 'components/SectionHeader/SectionHeader';
import CardSkeleton from 'components/CardSkeleton/CardSkeleton';
import ClassCard from 'components/ClassCard/ClassCard';
import JoinGroupForm from 'components/JoinGroupForm/JoinGroupForm';
import CreateGroupForm from 'components/CreateGroupForm/CreateGroupForm';

import { Subject } from 'types/Subject/Subject';
import {
  StudentClass,
  TeacherClass,
  StudentClassListPromise,
  TeacherClassListPromise,
} from 'types/Class/Class';
import {
  getSubjects,
  getStudentClassList,
  getTeacherClassList,
} from 'utils/db/db.utils';

import { updateSubjects } from 'store/subject/subjectSlice';

import styles from './Classes.module.css';

export default function Classes() {
  const [classList, setclassList] = useState<StudentClass[] | TeacherClass[]>(
    []
  );

  const user = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const getSubjectsList = async () => {
      const data = await getSubjects(user?.authToken as string);

      if (data.status === 'success') {
        dispatch(updateSubjects(data.data as Subject[]));
      }
    };

    const getClassList = async () => {
      let data: TeacherClassListPromise | StudentClassListPromise;

      if (user?.role === 'teacher') {
        data = await getTeacherClassList(user.id, user.authToken);
      } else {
        data = await getStudentClassList(
          user?.id as string,
          user?.authToken as string
        );
      }

      if (data.status === 'success' && typeof data.data !== 'string') {
        setclassList(data.data);
      }
    };

    if (user?.role === 'teacher') getSubjectsList();

    getClassList();
  }, []);

  return (
    <>
      <SectionHeader title="Mis Clases">
        {user?.role === 'teacher' ? <CreateGroupForm /> : <JoinGroupForm />}
      </SectionHeader>
      <div className={styles['card-container']}>
        {classList.length > 0 ? (
          classList.map((classItem) => (
            <ClassCard
              key={classItem.class_id}
              classInfo={classItem}
            />
          ))
        ) : (
          <CardSkeleton items={4} />
        )}
      </div>
    </>
  );
}
