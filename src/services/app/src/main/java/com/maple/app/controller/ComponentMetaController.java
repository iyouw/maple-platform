package com.maple.app.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.entity.ComponentMeta;
import com.maple.app.service.ComponentMetaService;

@RestController
@RequestMapping("/componentMetas")
public class ComponentMetaController {

  private ComponentMetaService service;

  @Autowired
  public ComponentMetaController(ComponentMetaService service){
    this.service = service;
  }

  @GetMapping
  public ArrayList<ComponentMeta> getList() {
    return service.getList();
  }

  @GetMapping("/{id}")
  public ComponentMeta getById(@PathVariable("id") UUID id) {
    return service.getById(id);
  }

  @PostMapping
  public Boolean add(@RequestBody ComponentMeta componentMeta) {
    return service.add(componentMeta);
  }

  @PostMapping("/delete/{id}")
  public Boolean deleteById(@PathVariable("id") UUID id) {
    return service.deleteById(id);
  }
}
