package com.sample;


import java.time.LocalDateTime;

public class SysFileUpload {

  private long id;
  private long userId;
  private String token;
  private String url;
  private String originalName;
  private String fileName;
  private String filePath;
  private long lastBatchStatus;
  private LocalDateTime lastBatchTime;
  private long status;
  private String remark;
  private long version;
  private LocalDateTime createTime;
  private String createBy;
  private LocalDateTime updateTime;
  private String updateBy;


  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }


  public long getUserId() {
    return userId;
  }

  public void setUserId(long userId) {
    this.userId = userId;
  }


  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }


  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }


  public String getOriginalName() {
    return originalName;
  }

  public void setOriginalName(String originalName) {
    this.originalName = originalName;
  }


  public String getFileName() {
    return fileName;
  }

  public void setFileName(String fileName) {
    this.fileName = fileName;
  }


  public String getFilePath() {
    return filePath;
  }

  public void setFilePath(String filePath) {
    this.filePath = filePath;
  }


  public long getLastBatchStatus() {
    return lastBatchStatus;
  }

  public void setLastBatchStatus(long lastBatchStatus) {
    this.lastBatchStatus = lastBatchStatus;
  }


  public LocalDateTime getLastBatchTime() {
    return lastBatchTime;
  }

  public void setLastBatchTime(LocalDateTime lastBatchTime) {
    this.lastBatchTime = lastBatchTime;
  }


  public long getStatus() {
    return status;
  }

  public void setStatus(long status) {
    this.status = status;
  }


  public String getRemark() {
    return remark;
  }

  public void setRemark(String remark) {
    this.remark = remark;
  }


  public long getVersion() {
    return version;
  }

  public void setVersion(long version) {
    this.version = version;
  }


  public LocalDateTime getCreateTime() {
    return createTime;
  }

  public void setCreateTime(LocalDateTime createTime) {
    this.createTime = createTime;
  }


  public String getCreateBy() {
    return createBy;
  }

  public void setCreateBy(String createBy) {
    this.createBy = createBy;
  }


  public LocalDateTime getUpdateTime() {
    return updateTime;
  }

  public void setUpdateTime(LocalDateTime updateTime) {
    this.updateTime = updateTime;
  }


  public String getUpdateBy() {
    return updateBy;
  }

  public void setUpdateBy(String updateBy) {
    this.updateBy = updateBy;
  }

}
