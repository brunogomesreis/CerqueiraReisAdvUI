import React, { FC } from 'react';

interface SummaryCardProps {
  title: string;
  subtitle?: string;
}

const SummaryCards: FC<SummaryCardProps> = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default SummaryCards;