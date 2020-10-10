import React from 'react';
import { useParams } from 'react-router-dom';

export const ItemDetails = () => {
  const { itemName } = useParams<{ itemName: string }>();
  return <div>{itemName}</div>;
};
