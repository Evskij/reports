import React from 'react';
import MaterialTable from 'material-table';

import ScrapService from '../service/ScrapService'

class Scrap extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            scrapList:[]
        }     
    }
    
    componentDidMount(){
        ScrapService.getScrapList().then((response) => {
            this.setState({ scrapList: response.data})
        });    
    }
    
    render () {    
        return (
            <>
            <MaterialTable
                columns = {
                    [{title:'ID', field: 'id', hidden: 'true'},
                    {title: 'Номер документа', field: 'docid', hidden: 'true'},
                    {title:'Дата выгрузки', field: 'data'},
                    {title:'Место разнрузки', field: 'locale'},
                    {title:'Тип ТС', field: 'typeOfTransport'},
                    {title:'Номер ТС', field: 'numberOfTransport'},
                    {title:'Вид материала', field: 'typeOfScrap'},
                    {title:'Поставщик', field: 'shipper'},
                    {title:'Вес', field: 'weight', filtering: false}]
                }
                data = {this.state.scrapList}
                title = 'Журнал учёта лома УПП ЭСПЦ'
                options={{
                    exportButton: {
                        pdf: false,
                        csv: true
                    },
                    search: false,
                    filtering: true,
                    sorting: true,
                    headerStyle: {
                        backgroundColor: '#007bff',
                        color: '#FFF'
                      },
                      pageSize: 5,
                      pageSizeOptions: [15, 30, 60, 100]
                  }}
            />
            </>
        )
    }
}

export default Scrap