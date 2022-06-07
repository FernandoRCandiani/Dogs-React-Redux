import React from 'react';
import FeedPhotosItem from './FeedPhotosItem';
import useFetch from '../../Hooks/useFetch';
import { PHOTOS_GET } from '../../Api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import { useSelector } from 'react-redux';

const FeedPhotos = ({  setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  const {list} = useSelector(state => state.feed);

    return (
      <ul className={`${styles.feed} animeLeft`}>
        {list.map((photo) => (
          <FeedPhotosItem
            key={photo.id}
            photo={photo}
            setModalPhoto={setModalPhoto}
          />
        ))}
      </ul>
    );
};

export default FeedPhotos;
