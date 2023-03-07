package com.maple.app.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.entity.ComponentMeta;
import com.maple.app.service.ComponentMetaService;

@RestController
public class ComponentMetaController {

  @Autowired
  private ComponentMetaService service;

  @GetMapping("/componentMetas")
  public ArrayList<ComponentMeta> getComponentMetas() {
    return service.getAllComponentMetas();
  }

  @GetMapping("/componentMetas/{id}")
  public ComponentMeta getComponentMetaById(@PathVariable("id") UUID id) {
    return service.getComponentMetaById(id);
  }

  @PostMapping("/componentMetas")
  public Boolean addComponentMeta(@RequestBody ComponentMeta componentMeta) {
    return service.addComponentMeta(componentMeta);
  }

  @PostMapping("/componentMetas/delete/{id}")
  public Boolean deleteComponentMeta(@PathVariable("id") String id) {
    var uuid = UUID.fromString(id);
    return service.deleteComponentMetaById(uuid);
  }
}
