package com.maple.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.service.AppService;
import com.maple.app.infra.ResponseBase;
import com.maple.app.entity.App;

import java.util.List;
import java.util.UUID;

@RestController
public class AppController {
  private AppService service;

  public AppController(AppService service) {
    this.service = service;
  }

  @GetMapping("/apps")
  public ResponseBase<List<App>> getList() {
    var res = service.getList();
    return ResponseBase.success(res);
  }

  @GetMapping("/apps/{id}")
  public ResponseBase<App> get(@PathVariable UUID id) {
    var res = service.get(id);
    return ResponseBase.success(res);
  }

  @PostMapping("/apps")
  public ResponseBase<UUID> createOrUpdate(@RequestBody App app) {
    var res = service.upsert(app);
    return ResponseBase.success(res);
  }

  @PostMapping("/apps/delete/{id}")
  public ResponseBase<Boolean> delete(@PathVariable UUID id) {
    var res = service.delete(id);
    return ResponseBase.success(res);
  }
}
