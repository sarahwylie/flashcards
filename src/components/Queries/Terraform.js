const terraformQueries = [
    {
      id: 1,
      category: "Terraform",
      question: "What is EC2?",
      answer: "Elastic Compute Cloud - provides scalable computing capacity in the cloud",
      source: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"
    },
    {
      id: 2,
      category: "Terraform",
      question: "What is the ami attribute?",
      answer: "Specifies the Amazon machine image ID for the EC2 instance.",
      source: "https://www.freecodecamp.org/news/terraform-syntax-for-beginners/"
    },
    {
      id: 3,
      category: "Terraform",
      question: "What is the instance_type attribute?",
      answer: "Specifies the size of the machine to be created.",
      source: "https://www.freecodecamp.org/news/terraform-syntax-for-beginners/"
    },
    {
      id: 4,
      category: "Terraform",
      question: "What are providers?",
      answer: "Providers let Terraform know which plugins need to be installed to execute the configuration.",
      source: "https://www.freecodecamp.org/news/terraform-syntax-for-beginners/"
    },
    {
      id: 5,
      category: "Terraform",
      question: "What are resources?",
      answer: "Resources represent the actual cloud resources to be created.",
      source: "https://www.freecodecamp.org/news/terraform-syntax-for-beginners/"
    },
    {
      id: 6,
      category: "Terraform",
      question: "What is the best practice for organizing code file structure in Terraform applications?",
      answer: "As a general practice, the Terraform codebase is divided into multiple files based on the providers, resources, and variables. variables.tf contains all declared input variables (region, ami, type) and output variables (instance_id). provider.tf contains declarations for providers (terraform, aws). main.tf contains declarations for actual resources to be created.",
      source: "https://www.freecodecamp.org/news/terraform-syntax-for-beginners/"
    },
  ]
  
  export default terraformQueries; 