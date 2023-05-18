﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using AngularAPI.Models;

namespace AngularAPI.Models;

    [Table("Student")]
    public partial class Student
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Name { get; set; }
        public int? Age { get; set; }
        public int? DeptNo { get; set; }
        [StringLength(50)]
        public string email { get; set; }

        [ForeignKey("DeptNo")]
        [InverseProperty("Students")]
        public virtual Department DeptNoNavigation { get; set; }
    }
