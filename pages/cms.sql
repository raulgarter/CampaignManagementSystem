CREATE TABLE client (
	id_client serial PRIMARY KEY,
	first_name character varying NOT NULL,
	last_name character varying NOT NULL,
	email character varying NOT NULL,
	city character varying NOT NULL,
	client_state character varying NOT NULL,
	client_type character varying NOT NULL
);

CREATE TABLE phone_plan (
	id_plan serial PRIMARY KEY,
	plan_name character varying NOT NULL,
	plan_type character varying NOT NULL,
	plan_cost numeric NOT NULL,
	voice numeric NOT NULL,
	sms integer NOT NULL,
	data_mb numeric NOT NULL
);

CREATE TABLE plan_contract (
	id_contract serial PRIMARY KEY,
	begin_date date NOT NULL,
	ending_date date NOT NULL,
    fk_client integer NOT NULL,
    fk_phone_plan integer NOT NULL,

	CONSTRAINT fk_client FOREIGN KEY (fk_client) references client (id_client) ON DELETE CASCADE,
	CONSTRAINT fk_phone_plan FOREIGN KEY (fk_phone_plan) references phone_plan (id_plan) ON DELETE CASCADE
);

CREATE TABLE current_balance (
	id_balance serial PRIMARY KEY,
	balance numeric NOT NULL,
    voice numeric NOT NULL,
	sms integer NOT NULL,
	data_mb numeric NOT NULL,
    fk_client integer NOT NULL,

	CONSTRAINT fk_client FOREIGN KEY (fk_client) references client (id_client) ON DELETE CASCADE
);

CREATE TABLE campaign (
    id_campaign serial PRIMARY KEY,
    campaign_name VARCHAR (60) NOT NULL,
    description VARCHAR(220) NOT NULL,
    status VARCHAR (14) NOT NULL,
    email_template VARCHAR (25) NOT NULL
);

CREATE TABLE scheduler (
    id_scheduler serial PRIMARY KEY,
    begin_date date NOT NULL,
    ending_date date NOT NULL,
    frequency VARCHAR(8) NOT NULL,
    hour time,
    date date,
    day_week VARCHAR (10),
    fk_campaign integer NOT NULL,

    CONSTRAINT fk_campaign FOREIGN KEY (fk_campaign) references campaign (id_campaign) ON DELETE CASCADE
);

CREATE TABLE campaign_rule (
    id_rule serial PRIMARY KEY,
    rule_name VARCHAR(25) NOT NULL,
    rule_description VARCHAR(300),
    rule_field VARCHAR(16) NOT NULL,
    rule_type VARCHAR(12) NOT NULL,
    rule_value VARCHAR(24) NOT NULL,
    fk_campaign integer NOT NULL,

    CONSTRAINT fk_campaign FOREIGN KEY (fk_campaign) references campaign (id_campaign) ON DELETE CASCADE
);

CREATE TABLE execution (
	id_execution serial PRIMARY KEY,
	execution_date date NOT NULL,
	mail_cancellation boolean,
    fk_campaign integer NOT NULL,
    fk_client integer NOT NULL,

	CONSTRAINT fk_campaign FOREIGN KEY (fk_campaign) references campaign (id_campaign) ON DELETE CASCADE,
	CONSTRAINT fk_client FOREIGN KEY (fk_client) references client (id_client) ON DELETE CASCADE
);

CREATE TABLE cms_user (
	id_user serial PRIMARY KEY,
	first_name character varying NOT NULL,
	last_name character varying NOT NULL,
	user_status boolean NOT NULL,
	user_role character varying NOT NULL,
	email character varying NOT NULL,
	username character varying NOT NULL,
	user_password character varying NOT NULL
);
