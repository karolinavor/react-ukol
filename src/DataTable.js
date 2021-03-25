import React, { Component } from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';

class DataTable extends Component {
    render() {
        return (
            <div className="p-4 m-1">
                <CsvToHtmlTable
                    data={this.props.data}
                    csvDelimiter=";"
                />
            </div>
        );
    }
}

export default DataTable;
