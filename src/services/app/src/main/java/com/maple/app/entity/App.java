package com.maple.app.entity;

import com.maple.app.infra.EntityBase;
import java.util.UUID;

public class App extends EntityBase<UUID> {
  private String name;
  private String icon;
  private String description;

  public String getName() {
    return this.name;
  }

  public void setName(String name){
    this.name = name;
  }

  public String getIcon() {
    return this.icon;
  }

  public void setIcon(String icon) {
    this.icon = icon;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
