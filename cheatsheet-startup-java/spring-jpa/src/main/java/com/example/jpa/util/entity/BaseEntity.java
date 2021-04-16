package com.example.jpa.util.entity;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Version;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.GenericGenerator;
import com.example.jpa.constant.enums.StatusEnum;
import lombok.Getter;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;


/**
 * 参考：
 * 1. https://github.com/slyak/spring-data-jpa-extra/tree/master/src/main/java/com/slyak/spring/jpa/auditing
 * 2. https://github.com/onevroad/snowflake-plus
 * 3. https://my.oschina.net/momei/blog/3011777
 */
@MappedSuperclass
@Getter
@Setter
@Slf4j
public abstract class BaseEntity implements Serializable {

    @GeneratedValue(generator = "snowFlakeId")
    @GenericGenerator(name = "snowFlakeId", strategy = SnowflakeIdGenerator.TYPE)
    @Id
    @Column(name = "id")
    private Long id;

    @ColumnDefault(value = "''")
    @Column(name = "remark")
    private String remark = "";

    @Convert(converter = StatusEnum.StatusEnumConverter.class)
    @Column(name = "status")
    private StatusEnum status = StatusEnum.ENABLE;

    @Version
    @Column(name = "version")
    private Integer version = 1;

    @Column(name = "create_time", updatable = false)
    private Long createTime;

    @Column(name = "create_by")
    private String createBy = "";

    @Column(name = "update_time")
    protected Long updateTime;

    @Column(name = "update_by")
    protected String updateBy = "";

    @PrePersist
    protected void onCreate() {
        LOGGER.trace("onCreate");
        this.createTime = this.updateTime = System.currentTimeMillis();
    }

    @PreUpdate
    protected void onUpdate() {
        LOGGER.trace("onUpdate");
        this.updateTime = System.currentTimeMillis();
    }

    @Override
    public String toString() {
        return String.format("Entity of type %s with id: %s", this.getClass().getName(), getId());
    }
}
