-- Table: public.profiles

-- DROP TABLE IF EXISTS public.profiles;

CREATE TABLE IF NOT EXISTS public.profiles
(
    id integer NOT NULL,
    email character varying(32) COLLATE pg_catalog."default" NOT NULL,
    phone_number character varying(32) COLLATE pg_catalog."default",
    first_name character varying(32) COLLATE pg_catalog."default",
    last_name character varying(32) COLLATE pg_catalog."default",
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    CONSTRAINT id PRIMARY KEY (id),
    CONSTRAINT email UNIQUE (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.profiles
    OWNER to postgres;