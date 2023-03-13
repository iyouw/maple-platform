package com.maple.app.service;

import org.springframework.stereotype.Service;
import com.maple.app.dao.PageDao;
import com.maple.app.entity.Page;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class PageService {
  private PageDao pageDao;

  public PageService(PageDao pageDao) {
    this.pageDao = pageDao;
  }

  public List<Page> getList(UUID appId) {
    return pageDao.getList(appId);
  }

  public Page get(UUID id) {
    return pageDao.get(id);
  }

  public UUID upsert(Page page) {
    var res = page.getId() == null ? add(page) : update(page);
    return res;
  }

  public UUID add(Page page) {
    var id = UUID.randomUUID();
    var now = LocalDateTime.now();
    page.setId(id);
    page.setCreatedTime(now);
    page.setLatestUpdatedTime(now);
    pageDao.add(page);
    return id;
  }

  public UUID update(Page page) {
    var now = LocalDateTime.now();
    page.setLatestUpdatedTime(now);
    pageDao.update(page);
    return page.getId();
  }

  public Boolean delete(UUID id) {
    return pageDao.delete(id) > 0;
  }
}
