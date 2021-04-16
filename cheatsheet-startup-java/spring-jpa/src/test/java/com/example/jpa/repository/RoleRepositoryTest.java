package com.example.jpa.repository;

import com.example.jpa.BaseSpringBootTest;
import com.example.jpa.entity.SysRoleEntity;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;


@Slf4j
class RoleRepositoryTest extends BaseSpringBootTest {
    @Autowired
    private RoleRepository roleRepository;


    @Disabled
    @Test
    void testInsert() {

        SysRoleEntity sysRoleEntity = new SysRoleEntity();

        sysRoleEntity.setRoleCode("test");
        sysRoleEntity.setRoleName("测试结果");
        sysRoleEntity.setRoleOrder(10);
        sysRoleEntity.setDataScope(10);
        SysRoleEntity roleEntity = roleRepository.save(sysRoleEntity);
        LOGGER.info("roleEntity: ", roleEntity);
    }

    @Test
    void testUpdate() {
        Long roleId = 1312914071292608512L;
        Integer dataScopeId = 103;
//        更新的逻辑是先查询出来，然后再更新，查询的时候查询到对应的乐观锁的id值
        SysRoleEntity sysRoleEntity = new SysRoleEntity();
        sysRoleEntity.setDataScope(dataScopeId);
        sysRoleEntity.setRoleOrder(dataScopeId);
        sysRoleEntity.setRoleCode("test");
        sysRoleEntity.setRoleName("测试结果2");
        sysRoleEntity.setId(roleId);
        sysRoleEntity.setVersion(6);
        roleRepository.save(sysRoleEntity);

    }
}