CREATE TABLE `nfmp_users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(256) NOT NULL,
	`email` varchar(256) NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `nfmp_users_id` PRIMARY KEY(`id`),
	CONSTRAINT `email_idx` UNIQUE(`email`)
);
