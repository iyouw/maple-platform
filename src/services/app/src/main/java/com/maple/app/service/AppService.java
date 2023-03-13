package com.maple.app.service;

import org.springframework.stereotype.Service;

import com.maple.app.dao.AppDao;

import com.maple.app.entity.App;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class AppService {
  private AppDao appDao;

  public AppService(AppDao appDao) {
    this.appDao = appDao;
  }

  public List<App> getList() {
    return appDao.getList();
  }

  public App get(UUID id) {
    return appDao.get(id);
  }

  public UUID upsert(App app) {
    return app.getId() == null ? add(app) : update(app);
  }

  public UUID add(App app) {
    var id = UUID.randomUUID();
    var now = LocalDateTime.now();
    app.setId(id);
    app.setCreatedTime(now);
    app.setLatestUpdatedTime(now);
    appDao.add(app);
    return id;
  }

  public UUID update(App app) {
    var now = LocalDateTime.now();
    app.setLatestUpdatedTime(now);
    appDao.update(app);
    return app.getId();
  }

  public Boolean delete(UUID id) {
    return appDao.delete(id) > 0;
  }
}
