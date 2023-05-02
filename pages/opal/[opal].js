import React from 'react';
import { useRouter } from 'next/router';

function DetailPage() {
  const router = useRouter();

  console.log(router.query.opal);

  const myOpal = router.query.opal;

  return <h1>Details Page {myOpal}</h1>;
}

export default DetailPage;
