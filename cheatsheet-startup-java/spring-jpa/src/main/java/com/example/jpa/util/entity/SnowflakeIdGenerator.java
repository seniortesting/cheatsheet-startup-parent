package com.example.jpa.util.entity;

import java.io.Serializable;
import java.util.Properties;
import org.hibernate.HibernateException;
import org.hibernate.MappingException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.Configurable;
import org.hibernate.id.IdentifierGenerator;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.Type;
import com.fasterxml.jackson.annotation.JsonFormat;
import cn.hutool.core.lang.Snowflake;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.RandomUtil;
import lombok.extern.slf4j.Slf4j;


@Slf4j
public class SnowflakeIdGenerator implements IdentifierGenerator, Configurable {

    public static final String TYPE = "com.example.jpa.util.entity.SnowflakeIdGenerator";
    /**
     * 为终端ID,0-31
     */
    @JsonFormat(shape = JsonFormat.Shape.STRING)
    private long workerId = 0;
    /**
     * 数据中心ID,0-31
     */
    private final long datacenterId = 1;
    private Snowflake snowflake;

    @Override
    public void configure(Type type, Properties properties, ServiceRegistry serviceRegistry) throws MappingException {
        workerId = RandomUtil.randomLong(0, 31);
        snowflake = IdUtil.createSnowflake(workerId, datacenterId);
    }

    @Override
    public Serializable generate(final SharedSessionContractImplementor sharedSessionContractImplementor,
            final Object o)
            throws HibernateException {
        final long nextId = snowflake.nextId();
        return nextId;
    }

}
