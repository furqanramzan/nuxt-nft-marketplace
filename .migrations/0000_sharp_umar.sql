CREATE TABLE `nfmp_users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`address` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `nfmp_users_id` PRIMARY KEY(`id`),
	CONSTRAINT `address_idx` UNIQUE(`address`)
);
