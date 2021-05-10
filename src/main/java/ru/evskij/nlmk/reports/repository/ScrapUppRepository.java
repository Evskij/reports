package ru.evskij.nlmk.reports.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ru.evskij.nlmk.reports.entity.ScrapUpp;


@Repository
public interface ScrapUppRepository extends JpaRepository<ScrapUpp, Long> {

}