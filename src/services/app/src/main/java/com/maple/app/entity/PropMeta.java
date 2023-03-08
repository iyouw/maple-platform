package com.maple.app.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import com.maple.app.infra.EntityBase;

public class PropMeta extends EntityBase<UUID> {
  private String name;
  private Integer type;
  private Boolean required;
  private UUID parentId;
  private UUID componentMetaId;

  private List<PropMeta> children;

  public PropMeta() {
    this.required = false;
    this.children = new ArrayList<PropMeta>();
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getType() {
    return this.type;
  }

  public void setType(Integer type) {
    this.type = type;
  }

  public Boolean getRequired() {
    return this.required;
  }

  public void setRequired(Boolean required) {
    this.required = required;
  }

  public UUID getParentId() {
    return this.parentId;
  }

  public void setParentId(UUID parentId) {
    this.parentId = parentId;
  }

  public UUID getComponentMetaId() {
    return this.componentMetaId;
  }

  public void setComponentMetaId(UUID componentMetaId) {
    this.componentMetaId = componentMetaId;
  }

  public List<PropMeta> getChildren() {
    return this.children;
  }

  public void setChildren(List<PropMeta> children) {
    this.children = children;
  }
}
