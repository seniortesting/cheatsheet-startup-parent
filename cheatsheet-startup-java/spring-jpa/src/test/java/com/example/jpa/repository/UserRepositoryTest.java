package com.example.jpa.repository;

import com.example.jpa.BaseSpringBootTest;
import com.example.jpa.entity.SysUserEntity;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;

class UserRepositoryTest extends BaseSpringBootTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void testQueryOneTable() {
        List<SysUserEntity> roles = userRepository.findRoles();
        assertNotNull(roles);
    }

    @Test
    public void testQueryManyTableReturnOneTable() {
        List<SysUserEntity> usersByRoleId = userRepository.findUsersByRoleId(1L);
        assertNotNull(usersByRoleId);
    }
}