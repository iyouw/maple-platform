package com.maple.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.maple.app.service.PageService;
import com.maple.app.infra.ResponseBase;
import com.maple.app.entity.Page;

import java.util.List;
import java.util.UUID;

@RestController
public class PageController {
  private PageService service;

  public PageController(PageService service) {
    this.service = service;
  }

  @GetMapping("/apps/{appId}/pages")
  public ResponseBase<List<Page>> getList(@PathVariable UUID appId) {
    var res = service.getList(appId);
    return ResponseBase.success(res);
  }

  @GetMapping("/pages/{id}")
  public ResponseBase<Page> get(@PathVariable UUID id) {
    var res = service.get(id);
    return ResponseBase.success(res);
  }

  @PostMapping("/pages")
  public ResponseBase<UUID> createOrUpdate(@RequestBody Page page) {
    var res = service.upsert(page);
    return ResponseBase.success(res);
  }

  @PostMapping("/pages/delete/{id}")
  public ResponseBase<Boolean> delete(@PathVariable UUID id) {
    var res = service.delete(id);
    return ResponseBase.success(res);
  }
}
