--
-- Create table `sys_user`
--
CREATE TABLE sys_user (
                          id bigint(20) UNSIGNED NOT NULL COMMENT '记录唯一标识id',
                          user_name varchar(30) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
                          nick_name varchar(30) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL DEFAULT '',
                          phone varchar(11) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
                          passwd varchar(255) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
                          sex int(11) DEFAULT 3 COMMENT '用户性别（1男 2女 3未知）',
                          birth date DEFAULT NULL,
                          avatar varchar(1000) DEFAULT 'https://res.yitieyilu.com/assets/static/img/avatar.png',
                          email varchar(50) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
                          signature varchar(255) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
                          address varchar(255) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '',
                          last_login_time datetime DEFAULT CURRENT_TIMESTAMP,
                          last_login_ip varchar(255) DEFAULT '',
                          wx_openid varchar(32) binary CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT '' COMMENT '微信openid',
                          remark varchar(255) DEFAULT '',
                          status tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '对应该条记录是否可用，0可用，1不可用',
                          version int(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT '对应记录的修订版本号,乐观锁',
                          create_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的创建时间',
                          create_by varchar(64) DEFAULT '' COMMENT '对应创建记录的人',
                          update_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的最后修改时间',
                          update_by varchar(64) DEFAULT '' COMMENT '对应最后修改记录的人',
                          PRIMARY KEY (id)
)
    ENGINE = INNODB,
    AVG_ROW_LENGTH = 5461,
    CHARACTER SET utf8mb4,
    COLLATE utf8mb4_general_ci,
    COMMENT = '系统用户信息表';

use test_example;
--
-- Create index `IDX_sys_user_user_name` on table `sys_user`
--
ALTER TABLE sys_user
    ADD INDEX IDX_sys_user_user_name (user_name);

--
-- Create index `IDX_sys_user_wx_openid` on table `sys_user`
--
ALTER TABLE sys_user
    ADD INDEX IDX_sys_user_wx_openid (wx_openid);

--
-- Create index `UK_primary_id` on table `sys_user`
--
ALTER TABLE sys_user
    ADD UNIQUE INDEX UK_primary_id (id);

--
-- Create table `sys_role`
--
CREATE TABLE sys_role (
                          id bigint(20) UNSIGNED NOT NULL COMMENT '记录唯一标识id',
                          role_name varchar(30) NOT NULL DEFAULT '' COMMENT '角色名称',
                          role_code varchar(64) NOT NULL DEFAULT '' COMMENT '角色权限字符串',
                          role_order int(11) NOT NULL DEFAULT 1 COMMENT '显示顺序',
                          data_scope int(11) DEFAULT 1 COMMENT '数据范围（1：全部数据权限 2：自定数据权限 3：本部门数据权限 4：本部门及以下数据权限）',
                          remark varchar(500) DEFAULT '' COMMENT '备注',
                          status tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '对应该条记录是否可用，1可用，0不可用',
                          version int(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT '对应记录的修订版本号,乐观锁',
                          create_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的创建时间',
                          create_by varchar(64) DEFAULT '' COMMENT '对应创建记录的人',
                          update_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的最后修改时间',
                          update_by varchar(64) DEFAULT '' COMMENT '对应最后修改记录的人',
                          PRIMARY KEY (id)
)
    ENGINE = INNODB,
    AVG_ROW_LENGTH = 5461,
    CHARACTER SET utf8mb4,
    COLLATE utf8mb4_general_ci,
    COMMENT = '角色信息表';

--
-- Create index `UK_primary_id` on table `sys_role`
--
ALTER TABLE sys_role
    ADD UNIQUE INDEX UK_primary_id (id);

--
-- Create index `UK_sys_role_role_code` on table `sys_role`
--
ALTER TABLE sys_role
    ADD UNIQUE INDEX UK_sys_role_role_code (role_code);


--
-- Create table `sys_user_role`
--
CREATE TABLE sys_user_role (
                               id bigint(20) UNSIGNED NOT NULL COMMENT '记录唯一标识id',
                               user_id bigint(20) UNSIGNED NOT NULL COMMENT '用户ID',
                               role_id bigint(20) UNSIGNED NOT NULL COMMENT '角色ID',
                               status tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '对应该条记录是否可用，1可用，0不可用',
                               version int(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT '对应记录的修订版本号,乐观锁',
                               create_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的创建时间',
                               create_by varchar(64) DEFAULT '' COMMENT '对应创建记录的人',
                               update_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的最后修改时间',
                               update_by varchar(64) DEFAULT '' COMMENT '对应最后修改记录的人',
                               PRIMARY KEY (id)
)
    ENGINE = INNODB,
    AVG_ROW_LENGTH = 3276,
    CHARACTER SET utf8mb4,
    COLLATE utf8mb4_general_ci,
    COMMENT = '用户和角色关联表';

--
-- Create index `IDX_sys_user_role` on table `sys_user_role`
--
ALTER TABLE sys_user_role
    ADD INDEX IDX_sys_user_role (user_id, role_id);

--
-- Create index `UK_primary_id` on table `sys_user_role`
--
ALTER TABLE sys_user_role
    ADD UNIQUE INDEX UK_primary_id (id);


--
-- Create table `sys_file_upload`
--
CREATE TABLE sys_file_upload (
                                 id bigint(20) UNSIGNED NOT NULL COMMENT '记录唯一标识id',
                                 user_id bigint(20) NOT NULL COMMENT '文件上传者',
                                 token varchar(255) NOT NULL DEFAULT '' COMMENT '上传文件的token ID,用于分组多个文件',
                                 url varchar(255) NOT NULL DEFAULT '' COMMENT '文件访问url',
                                 original_name varchar(255) DEFAULT '' COMMENT '上传文件原始名称',
                                 file_name varchar(255) NOT NULL DEFAULT '' COMMENT '上传文件后的名称',
                                 file_path varchar(255) NOT NULL DEFAULT '' COMMENT '上传文件短路径',
                                 last_batch_status int(11) DEFAULT 0 COMMENT '最后一次定时任务执行状态(0=成功,1=失败)',
                                 last_batch_time datetime DEFAULT NULL COMMENT '最后一次定时任务执行时间',
                                 status tinyint(1) UNSIGNED NOT NULL DEFAULT 1 COMMENT '对应该条记录是否可用，1可用，0不可用',
                                 remark varchar(255) DEFAULT '',
                                 version int(20) UNSIGNED NOT NULL DEFAULT 0 COMMENT '对应记录的修订版本号,乐观锁',
                                 create_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的创建时间',
                                 create_by varchar(64) DEFAULT '' COMMENT '对应创建记录的人',
                                 update_time datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '对应记录的最后修改时间',
                                 update_by varchar(64) DEFAULT '' COMMENT '对应最后修改记录的人',
                                 PRIMARY KEY (id)
)
    ENGINE = INNODB,
    CHARACTER SET utf8mb4,
    COLLATE utf8mb4_general_ci,
    COMMENT = '文件上传表';

--
-- Create index `UK_primary_id` on table `sys_file_upload`
--
ALTER TABLE sys_file_upload
    ADD UNIQUE INDEX UK_primary_id (id);


--
-- 插入数据

INSERT INTO sys_user VALUES
(1214769213920542722, '13088881010', '管家一枚', '13088881010', '$2a$10$an/2Q5I1hrOxKZgBTqbibuK4V1l9DMgE7TT5WdlpFffAWyB5xU.Qq', 1, '2020-01-08', 'https://res.yitieyilu.com/test/files/upload/img/20200131/d659a7dc09074cda94c77ba85e58f31d.jpg', '1725641479@qq.com', 'test34', '33e', '2020-06-17 16:08:21', '127.0.0.1', '', '', 1, 10, '2020-01-08 12:42:04', '', '2020-06-17 16:08:21', ''),
(1214769419261083649, '13088881011', '普通一枚', '13088881011', '$2a$10$tHWtOWk7hE9xirGmyiDyP.1fpUq4aMGsieodt.jj/97XtRd8B5k2S', 3, '2020-01-08', 'https://res.yitieyilu.com/assets/img/avatar.png', '', '', '', '2020-01-11 14:33:26', '127.0.0.1', '', '', 1, 6, '2020-01-08 12:42:53', '', '2020-01-30 21:44:59', ''),
(1215841203318194177, '13088881012', '新人一枚', '13088881012', '$2a$10$cehV6AaEiR4JDRutBFLXv.iUZY42W8ScWhRFhVEyboTWMZDE./1ue', 3, '2020-01-11', 'https://res.yitieyilu.com/assets/img/avatar.png', '', '', '', '2020-01-11 14:40:51', '127.0.0.1', '', '', 1, 0, '2020-01-11 11:41:46', '', '2020-01-30 18:18:57', '');

INSERT INTO sys_role VALUES
(1, '管理员', 'admin', 1, 1, '管理员', 1, 0, '2019-11-22 00:08:48', '', '2019-11-22 00:08:48', ''),
(2, '普通角色', 'user', 2, 2, '普通账号权限标识', 1, 0, '2019-11-22 00:09:16', '', '2020-01-11 14:33:16', ''),
(3, 'VIP角色', 'vip', 3, 3, 'vip用户账号标识', 1, 0, '2020-01-09 19:08:59', '', '2020-06-17 16:55:14', '');


INSERT INTO sys_user_role VALUES
(1208022353310679042, 1214769213920542722, 1, 1, 0, '2019-12-20 21:52:27', '', '2019-12-20 21:52:27', ''),
(1208025583503572994, 1214769419261083649, 2, 1, 0, '2019-12-20 22:05:17', '', '2019-12-20 22:05:17', ''),
(1208025750894051329, 1215841203318194177, 1, 1, 0, '2019-12-20 22:05:57', '', '2019-12-20 22:05:57', '');