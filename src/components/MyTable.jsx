export default function MyTable({ columns = [], data = [], className = '', onRowClick }) {
    if (!columns.length) return null;

    return (
        <table className={`table ${className}`}>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>{col.label ?? col.key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        onClick={() => onRowClick && onRowClick(row, rowIndex)}
                        style={{ cursor: onRowClick ? 'pointer' : 'default' }}
                    >
                        {columns.map((col) => (
                            <td key={col.key}>
                                {col.render ? col.render(row[col.key], row) : row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}