package com.maple.app.entity;

import java.util.UUID;

import com.maple.app.infra.EntityBase;

public class PropMeta extends EntityBase<Long> {
  private Integer type;
  private Boolean required;
  private Object defaultValue;
  private Long parentId;
  private UUID componentMetaId;

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

  public Object getDefaultValue() {
    return this.defaultValue;
  }

  public void setDefaultValue(Object defaultValue) {
    this.defaultValue = defaultValue;
  }

  public Long getParentId() {
    return this.parentId;
  }

  public void setParentId(Long parentId) {
    this.parentId = parentId;
  }

  public UUID getComponentMetaId() {
    return this.componentMetaId;
  }

  public void setComponentMetaId(UUID componentMetaId) {
    this.componentMetaId = componentMetaId;
  }
}
