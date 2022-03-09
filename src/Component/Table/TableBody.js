const TableBody = () => {
  const arr = [1, 2, 3, 4];

  const btnDetails = {
    delete: {
      value: 'Delete',
      className: 'delete',
    },
  };

  return (
    <tbody className='table-body'>
      {arr.map((number, index) => {
        return (
          <tr key={index}>
            <td>xyz</td>
            <td>abc</td>
            <td>mno</td>
            <td>pqr</td>
            <td>
              <button className='delete'>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
