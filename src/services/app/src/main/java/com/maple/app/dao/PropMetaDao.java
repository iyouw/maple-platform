package com.maple.app.dao;

import java.util.List;
import java.util.UUID;

import com.maple.app.entity.PropMeta;

public interface PropMetaDao {
  List<PropMeta> getByComponentMetaId(UUID componentMetaId);
  List<PropMeta> getByComponentMetaIds(List<UUID> ids);
  Integer addList(List<PropMeta> propMetas);
  Integer deleteByComponentMetaId(UUID componentMetaId);
}
