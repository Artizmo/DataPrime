import React from 'react';

// mock data
let techSkills = [
  {
    title: 'Applications',
    tech: [
      {
        name: 'Machine Learning',
        candidateScore: 1,
        businessScore: 4,
        percentageMatch: 25
      }
    ]
  },
  {
    title: 'Career',
    tech: []
  },
  {
    title: 'Delivery',
    tech: [
      {
        name: 'AWS',
        candidateScore: 1,
        businessScore: 2,
        percentageMatch: 50
      },
      {
        name: 'MySQL',
        candidateScore: 1,
        businessScore: 3,
        percentageMatch: 33
      },
      {
        name: 'MongoDB',
        candidateScore: 1,
        businessScore: 1,
        percentageMatch: 100
      },
      {
        name: 'TensorFlow',
        candidateScore: 1,
        businessScore: 5,
        percentageMatch: 20
      }
    ]
  }
]

const useFetchCategory = cat => {
  const [isFetching, setIsFetching] = React.useState(false);
  const [category, setCategory] = React.useState(null);

  React.useEffect(() => {
    if (cat && cat==='technical') {
      const fetch = () => {
        setIsFetching(true);
        setTimeout(async () => { // mock api call
          const data = await techSkills;
          setCategory(data);
          setIsFetching(false);
        }, 500)
      }
      fetch();
    }
  }, [cat])

  return {
    isFetching,
    category
  }
}

export default useFetchCategory;