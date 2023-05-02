import React from 'react';

import Table, { AvatarCell, SelectColumnFilter, StatusPill } from './Table';
import Link from 'next/link';

const OpalCell = ({ value }) => {
  return (
    <Link href={`/opal/${value}`} legacyBehavior>
      <button className='bg-white text-slate-800  rounded border-b-2 border-green-600 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center'>
        <span className='mr-1'></span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='17'
          height='17'
          viewBox='0 0 24 24'
        >
          <path
            fill='currentcolor'
            d='M2.01 21L23 12 2.01 3 2 10l15 2-15 2z'
          ></path>
        </svg>
      </button>
    </Link>

    // <Link href={`/opal/${value}`} legacyBehavior>
    //   <a className='px-4 py-2 font-medium text-sm leading-5 text-white bg-slate-600 rounded-lg hover:bg-slate-500 focus:outline-none focus:shadow-outline-slate focus:border-slate-700 active:bg-slate-700'>
    //     {value}
    //   </a>
    // </Link>
  );
};

const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'Active',
      opal: 123456,
      role: 'Admin',
      age: 27,
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Inactive',
      opal: 234567,
      role: 'Owner',
      age: 43,
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      status: 'Active',
      opal: 345678,
      role: 'Member',
      age: 32,
      imgUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      status: 'Offline',
      opal: 456789,
      role: 'Member',
      age: 29,
      imgUrl:
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'Inactive',
      opal: 567891,
      role: 'Admin',
      age: 36,
      imgUrl:
        'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      status: 'Active',
      opal: 678912,
      role: 'Member',
      age: 24,
      imgUrl:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
    },
  ];
  return [...data];
};

const MainTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Opal',
        accessor: 'opal',
        // Cell: ({ cell: { value } }) => <a href={`/opal/${value}`}>{value}</a>,
        Cell: OpalCell,
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: AvatarCell,
        imgAccessor: 'imgUrl',
        emailAccessor: 'email',
      },
      {
        Header: 'Title',
        accessor: 'title',
      },

      {
        Header: 'Status',
        accessor: 'status',
        Filter: SelectColumnFilter,
        Cell: StatusPill,
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
      {
        Header: 'Role',
        accessor: 'role',
        Filter: SelectColumnFilter,
        filter: 'includes',
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <div className='min-h-screen bg-gray-100 text-gray-900'>
      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4'>
        <div className=''>
          <h1 className='text-xl font-semibold'>React Table</h1>
        </div>
        <div className='mt-6'>
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
};

export default MainTable;
