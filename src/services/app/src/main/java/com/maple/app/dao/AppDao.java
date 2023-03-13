package com.maple.app.dao;

import java.util.List;
import java.util.UUID;

import com.maple.app.entity.App;

public interface AppDao {
  List<App> getList();
  App get(UUID id);
  UUID add(App app);
  UUID update (App app);
  Integer delete(UUID id);
}
