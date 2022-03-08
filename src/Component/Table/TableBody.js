const TableBody = () => {
  const arr = [1, 2, 3, 4];
  return (
    <tbody className='table-body'>
      {arr.map(() => {
        return (
          <tr>
            <td>xyz</td>
            <td>abc</td>
            <td>mno</td>
            <td>pqr</td>
            <td>stu</td>
          </tr>
        );
      })}
    </tbody>
  );
};
export default TableBody;
