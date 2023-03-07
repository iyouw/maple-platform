package com.maple.app.infra;

import java.sql.Timestamp;
public class EntityBase<TKey> {
  private TKey id;
  private String createdUserId;
  private String latestUpdatedUserId;
  private Timestamp createdTime;
  private Timestamp latestUpdatedTime;
  
  public TKey getId() {
    return this.id;
  }

  public void setId(TKey id){
    this.id = id;
  }

  public String getCreatedUserId() {
    return this.createdUserId;
  }

  public void setCreatedUserId(String createdUserId) {
    this.createdUserId = createdUserId;
  }

  public String getLatestUpdatedUserId() {
    return this.latestUpdatedUserId;
  }

  public Timestamp getCreatedTime() {
    return this.createdTime;
  }

  public void setCreatedTime(Timestamp createdTime) {
    this.createdTime = createdTime;
  }

  public Timestamp getLatestUpdatedTime() {
    return this.latestUpdatedTime;
  }

  public void setLatestUpdatedTime(Timestamp latestUpdatedTime) {
    this.latestUpdatedTime = latestUpdatedTime;
  }
}
