package ru.evskij.nlmk.reports.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import ru.evskij.nlmk.reports.entity.ScrapUpp;
import ru.evskij.nlmk.reports.repository.ScrapUppRepository;

import java.util.List;

@RestController
@RequestMapping("/scraplog")
public class ScrapUppController {

    @Autowired
    private ScrapUppRepository scrapUppRepository;

    @GetMapping("scraplist")
    @ResponseStatus(HttpStatus.OK)
    public List<ScrapUpp> findAll(){
        return this.scrapUppRepository.findAll();
    }
    //Остальные методы
}