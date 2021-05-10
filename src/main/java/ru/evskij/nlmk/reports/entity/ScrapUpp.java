package ru.evskij.nlmk.reports.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import javax.persistence.*;

@Entity
@Table(name = "scrap_upp")
@Data
@AllArgsConstructor
public class ScrapUpp {

    @Id
    @Column(name="id")
    private Long id;
    @Column(name="doc_id")
    private String docid;
    @Column(name="end_date")
    private String data;
    @Column(name="locale")
    private String locale;
    @Column(name="type_of_transport")
    private String typeOfTransport;
    @Column(name="number_of_transport")
    private String numberOfTransport;
    @Column(name="type_of_scrap")
    private String typeOfScrap;
    @Column(name="shipper")
    private String shipper;
    @Column(name="weight")
    private Long weight;

    public ScrapUpp() {
    }
}