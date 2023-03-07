package com.maple.app.controller;

import java.io.NotActiveException;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.entity.ComponentMeta;

@RestController
public class ComponentMetaController {

  @GetMapping("/componentMetas")
  public List<ComponentMeta> getComponentMetas() throws NotActiveException {
    throw new NotActiveException();
  }

  @GetMapping("/componentMetas/{id}")
  public List<ComponentMeta> getComponentMetaById(@PathVariable("id") String id) throws NotActiveException {
    throw new NotActiveException();
  }
}
