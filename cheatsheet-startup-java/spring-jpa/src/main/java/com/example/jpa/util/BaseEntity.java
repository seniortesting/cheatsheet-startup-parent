package com.example.jpa.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import lombok.extern.slf4j.Slf4j;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;


/**
 * 参考：
 * 1. https://github.com/slyak/spring-data-jpa-extra/tree/master/src/main/java/com/slyak/spring/jpa/auditing
 * 2. https://github.com/onevroad/snowflake-plus
 * 3. https://my.oschina.net/momei/blog/3011777
 */
@Data
@MappedSuperclass
@Slf4j
public abstract class BaseEntity implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(generator = "snowFlakeId")
    @GenericGenerator(name = "snowFlakeId", strategy = SnowflakeIdGenerator.TYPE)
    private Long id;

    @ColumnDefault(value = "''")
    @Column(name = "remark")
    private String remark = "";

    @Column(name = "status")
    private Boolean status = Boolean.TRUE;

    @Version
    @Column(name = "version")
    private Integer version = 1;

    @Column(name = "create_time", updatable = false)
    private java.time.LocalDateTime createTime;

    @Column(name = "create_by")
    private String createBy = "";

    @Column(name = "update_time")
    private java.time.LocalDateTime updateTime;

    @Column(name = "update_by")
    private String updateBy = "";

    @PrePersist
    protected void onCreate() {
        LOGGER.trace("onCreate");
        this.createTime = this.updateTime = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        LOGGER.trace("onUpdate");
        this.updateTime = LocalDateTime.now();
    }

    @Override
    public String toString() {
        return String.format("Entity of type %s with id: %s", this.getClass().getName(), getId());
    }
}
