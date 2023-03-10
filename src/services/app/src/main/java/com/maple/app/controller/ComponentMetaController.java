package com.maple.app.controller;

import java.util.ArrayList;
import java.util.UUID;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.entity.ComponentMeta;
import com.maple.app.infra.ResponseBase;
import com.maple.app.service.ComponentMetaService;

@RestController
@RequestMapping("/componentMetas")
public class ComponentMetaController {

  private ComponentMetaService service;

  public ComponentMetaController(ComponentMetaService service) {
    this.service = service;
  }

  @GetMapping
  public ResponseBase<ArrayList<ComponentMeta>> getList() {
    var res = service.getList();
    return ResponseBase.success(res);
  }

  @GetMapping("/{id}")
  public ResponseBase<ComponentMeta> getById(@PathVariable UUID id) {
    var res = service.getById(id);
    return ResponseBase.success(res);
  }

  @PostMapping
  public ResponseBase<Boolean> add(@RequestBody ComponentMeta componentMeta) {
    var res = service.add(componentMeta);
    return res ? ResponseBase.success(res) : ResponseBase.fail(res);
  }

  @PostMapping("/update")
  public ResponseBase<Boolean> update(@RequestBody ComponentMeta componentMeta) {
    var res = service.update(componentMeta);
    return res ? ResponseBase.success(res) : ResponseBase.fail(res);
  }

  @PostMapping("/delete/{id}")
  public ResponseBase<Boolean> deleteById(@PathVariable UUID id) {
    var res = service.deleteById(id);
    return res ? ResponseBase.success(res) : ResponseBase.fail(res);
  }
}
