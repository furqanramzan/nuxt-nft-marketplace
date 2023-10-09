CREATE TABLE `nfmp_assets` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`user_id` bigint UNSIGNED NOT NULL,
	`name` varchar(256) NOT NULL,
	`slug` varchar(256) NOT NULL,
	`media` varchar(256) NOT NULL,
	`description` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `nfmp_assets_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `nfmp_assets` ADD CONSTRAINT `nfmp_assets_user_id_nfmp_users_id_fk` FOREIGN KEY (`user_id`) REFERENCES `nfmp_users`(`id`) ON DELETE no action ON UPDATE no action;