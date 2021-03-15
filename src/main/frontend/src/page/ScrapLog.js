import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MaterialTable from 'material-table';


export const ScrapLog = () => (
    <>
    <Container>
        <Row className="justify-content-center margin-top">
            <h1></h1>
        </Row>
        <Row>
        <Container>
            <MaterialTable
            columns={[
                { title: 'Adı', field: 'name' },
                { title: 'Soyadı', field: 'surname' },
                { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
                { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
            ]}
            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
            title="Журнал учёта лома УПП ЭСПЦ"
            />
            </Container>
        </Row>
    </Container>
    </>
)