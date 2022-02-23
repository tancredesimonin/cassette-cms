# SETUP


## s3 configuration

### Using custom s3 provider

*Do yourself a favour, don't use a default config but named profile even if you use only one - for the moment -*

1. Setup the AWS CLI [Documentation for Scaleway](https://www.scaleway.com/en/docs/storage/object/api-cli/object-storage-aws-cli)

Named aws configuration

```bash
aws configure --profile <your-profile>
```

Test your config

```bash
aws --profile <your-profile> s3 ls
```

### set your bucket with custom domain name

The goal is to maintain the known assets urls in the database even in case of switching provider, or going to proper cdn.

[scaleway documentation](https://www.scaleway.com/en/docs/tutorials/s3-customize-url-cname)

set public acl

```bash
aws --profile <your-profile> s3api put-bucket-acl --bucket assets.<yourdomain> --acl public-read
```

### Known Errors

#### Unable to parse config file

- happens when a property is defined twice (happened to me with region after the `aws configure`) - [Answer source](https://bobbyhadz.com/blog/aws-cli-unable-parse-config-file-credentials)

#### AWS Access Key Id does not exist in our records

Happens when AWS_ACCESS_KEY_ID or AWS_SECRET_ACCESS_KEY environment variables are already defined.
To clean it:

```bash
unset AWS_ACCESS_KEY_ID
unset AWS_SECRET_ACCESS_KEY
```

