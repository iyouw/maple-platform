package com.maple.app.dao;

import java.util.List;
import java.util.UUID;
import com.maple.app.entity.Page;

public interface PageDao {
  List<Page> getList(UUID appId);
  Page get(UUID id);
  Integer add(Page page);
  Integer update(Page page);
  Integer delete(UUID id);
}
