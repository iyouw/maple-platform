package com.maple.app.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.entity.ComponentMeta;
import com.maple.app.infra.ResponseBase;
import com.maple.app.service.ComponentMetaService;

@RestController
public class ComponentMetaController {

  private ComponentMetaService service;

  public ComponentMetaController(ComponentMetaService service) {
    this.service = service;
  }

  @GetMapping("/componentMetas")
  public ResponseBase<ArrayList<ComponentMeta>> getList() {
    var res = service.getList();
    return ResponseBase.success(res);
  }

  @GetMapping("/componentMetas/{id}")
  public ResponseBase<ComponentMeta> get(@PathVariable UUID id) {
    var res = service.get(id);
    return ResponseBase.success(res);
  }

  @PostMapping("/componentMetas")
  public ResponseBase<UUID> createOrUpdate(@RequestBody ComponentMeta componentMeta) {
    var res = service.upsert(componentMeta);
    return ResponseBase.success(res);
  }

  @PostMapping("/componentMetas/delete/{id}")
  public ResponseBase<Boolean> delete(@PathVariable UUID id) {
    var res = service.delete(id);
    return ResponseBase.success(res);
  }
}
