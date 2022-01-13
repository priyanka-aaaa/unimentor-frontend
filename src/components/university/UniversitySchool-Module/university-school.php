<?php include 'dashboard-header.php'; ?>

                <!-- Begin Page Content -->
                <div class="container">

                    <!-- Page Heading -->
                    <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">University/School </h1>


                    </div>


                    <!-- Content Row -->

                    <div class="row">

                        <!-- Area Chart -->
                        <div class="col-xl-12 col-lg-7">

                            <!-- Card Header - Dropdown -->
                            <div id="accordion">
                                <div class="card">

                                <div class="card">
                                        <a class="card-header" data-bs-toggle="collapse" href="#collapseOne"><strong>1</strong>
                                        Primary Info

                                        </a>
                                        <div id="collapseOne" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                                <div class="from-block">
                                                    <form>                                                 
                                                    
                                                            <div class="row">
                                                                <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="form-label">Name
                                                                        *</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Name" name="uname"/>
                                                                </div>

                                                                </div>                                                               
                                                            </div>                                                        
                                                        <hr>                                                       
                                                            <div class="row">
                                                                <h6>Location</h6>
                                                                <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label class="form-label">Address
                                                                        *</label>
                                                                    <input type="text" class="form-control"
                                                                        placeholder="Address" name="Address"/>
                                                                </div>
                                                                </div>
                                                                <div class="col-md-6">
                                                                <div class="form-group">
                                                                    <label>Country *</label>
                                                                    <select class="form-control" name="country" required="">
                                                                        <option value="">Select Country</option>
                                                                        <option>India</option>
                                                                        <option>Afghanistan</option>
                                                                        <option>Albania</option>
                                                                        <option>Algeria</option>
                                                                        <option>American Samoa</option>
                                                                    </select>
                                                                </div>
                                                                </div>                                                                
                                                            </div>
                                                       

                                                       
                                                        <div class="row">    
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label>State *
                                                                    </label>
                                                                    <select class="form-control" name="state" required="">
                                                                        <option>Select State</option>
                                                                        <option>Please select country to view states
                                                                        </option>
                                                                    </select>
                                                                </div>      
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group"><label>City</label>
                                                                <select class="form-control" name="city" required="">
                                                                    <option >Select State</option>
                                                                    <option>Please select a state to view cities
                                                                    </option>
                                                                </select>
                                                              </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <div class="form-group">
                                                                    <label>Pincode *</label>
                                                                    <input type="text" class="form-control" placeholder="Pincode" name="pin_code" required="" value=""/>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                            <div class="form-group">
                                                            <label>University Type</label>
                                                            <select class="form-control" name="city" required="">
                                                                    <option >Select Type</option>
                                                                    <option>Public</option>
                                                                    <option>Private</option>
                                                                    <option>Govt</option>                                                                   
                                                                </select>
                                                            </div>
                                                          </div>
                                                        </div>

                                                        <div class="row">
                                                            <div class="col-md-6">
                                                            <div class="form-group">
                                                               <label>Logo</label></br>
                                                                <span class="documentUpload ant-upload-picture-card-wrapper" style="width:100%;">
                                                                    <div class="ant-upload-list ant-upload-list-picture-card">
                                                                    </div>
                                                                    <div class="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                        <span tabindex="0" class="ant-upload" role="button">
                                                                            <input type="file" accept="">
                                                                            <p>
                                                                                Upload/Drag &amp; Drop here</p>
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                            <div class="form-group">
                                                               <label>Cover Pict</label></br>
                                                                <span class="documentUpload ant-upload-picture-card-wrapper" style="width:100%;">
                                                                    <div class="ant-upload-list ant-upload-list-picture-card">
                                                                    </div>
                                                                    <div class="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                        <span tabindex="0" class="ant-upload" role="button">
                                                                            <input type="file" accept="">
                                                                            <p>
                                                                                Upload/Drag &amp; Drop here</p>
                                                                        </span>
                                                                    </div>
                                                                </span>
                                                            </div>
                                                            </div>
                                                        </div>


                                                        <div class="row">
                                                            <div class="col-md-12">
                                                            <div class="form-group">
                                                                    <label>Description</label>
                                                                   <textarea class="form-control" row="2" col="3"></textarea>
                                                                </div>
                                                            </div>
                                                        </div>


                                                        <div class="row">
                                                            <div class="col-md-4">                                                         
                                                            <div class="form-group">
                                                                    <label>Website</label>
                                                                    <input type="text" class="form-control" placeholder="website" name="website" required="" value=""/>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-4">
                                                            <label>Phone Number</label>
                                                            <input type="text" class="form-control" placeholder="phone number" name="ph-no" required="" value=""/>
                                                            </div>
                                                            <div class="col-md-4">
                                                                <label>Parent organization</label>
                                                                <input type="text" class="form-control" placeholder="Parent organization" name="pr-org" required="" value=""/>
                                                            </div>
                                                        </div>

                                                       


                                                        <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-md-6"></div>
                                                                <div class="col-md-6 text-right">
                                                                    <button type="button"
                                                                        class="btn btn-secondary ">Save
                                                                    </button>
                                                                    <button type="button"
                                                                        class="btn btn-success">Save &
                                                                        Next</button>
                                                                </div>

                                                            </div>

                                                        </div>



                                                </div>
                                            </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                                <div class="card">
                                    <a class="card-header" data-bs-toggle="collapse" href="#collapseTwo"><strong>2</strong>
                                    Overview
                                    </a>
                                    <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                            <from>
                                                <div class="d-flex flex-wrap" id="Address">
                                                    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="form-group">
                                                            <label>Founded year </label>
                                                            <select class="form-control" name="country" required="">
                                                                <option>Select Year</option>
                                                                <option>2021</option>
                                                                <option>2020</option>
                                                                <option>2019</option>
                                                                <option>2018</option>
                                                                <option>2017</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="form-group">
                                                            <label for="State/Province">Ranking                                                             </label>
                                                           <input type="text" class="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="form-group"><label for="City/Town">International Student Rate </label>
                                                            <select class="form-control" name="city" required="">
                                                                <option>Select Student Rate</option>
                                                                <option>1</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>                                                              
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="form-group">
                                                            <label>Popular Courses </label>
                                                                    <select class="form-control" name="city" required="">
                                                                <option>Select Courses</option>
                                                                <option>IELTS</option>
                                                                <option>TOEFL</option>
                                                                <option>GMAT</option>
                                                                <option>GRE</option>
                                                                <option>SAT</option>
                                                                <option>ACT</option>                                                                                                                         
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                        <div class="form-group">
                                                            <label for="Zipcode">No. of courses </label>
                                                                <select class="form-control" name="city" required="">
                                                                <option>Select Courses</option>
                                                                <option>IELTS</option>
                                                                <option>TOEFL</option>
                                                                <option>GMAT</option>
                                                                <option>GRE</option>
                                                                <option>SAT</option>
                                                                <option>ACT</option>                                                                                                                         
                                                            </select>
                                                        </div>                                                       
                                                    </div>
                                                    <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                                                    <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label>Add Month </label>
                                                                        <input type="text" class="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-3">
                                                                    <div class="form-group">
                                                                        <label>Year</label>
                                                                        <input type="text" class="form-control"/>
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-5">
                                                                    <div class="form-group">
                                                                        <label>Select Courses </label>
                                                                        <select class="form-control" name="city" required="">
                                                                            <option>Select Courses</option>
                                                                            <option>IELTS</option>
                                                                            <option>TOEFL</option>
                                                                            <option>GMAT</option>
                                                                            <option>GRE</option>
                                                                            <option>SAT</option>
                                                                            <option>ACT</option>                                                                                                                         
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="State/Province"> English Proficiency                                                             </label>
                                                           <input type="text" class="form-control" placholder="ielts/Pte etc.. " />
                                                        </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="State/Province"> CGPA                                                            </label>
                                                           <input type="text" class="form-control" placholder="CGPA" />
                                                        </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                        <div class="form-group">
                                                            <label for="State/Province">  Acceptance rate                                                            </label>
                                                           <input type="text" class="form-control" placholder=" acceptance rate" />
                                                        </div>
                                                        </div>
                                                    </div>

                                                    <div class="clearfix"></div>

                                                </div>

                                                <div class="mb-3">
                                                    <div class="row">
                                                        <div class="col-md-6"></div>
                                                        <div class="col-md-6 text-right">
                                                            <button type="button" class="btn btn-secondary">Save
                                                            </button>
                                                            <button type="button" class="btn btn-success">Save &
                                                                Next</button>
                                                        </div>

                                                    </div>

                                                </div>
                                            </from>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <a class="card-header" data-bs-toggle="collapse" href="#collapse3"><strong>3</strong>
                                    Courses & Fees
                                    </a>
                                    <div id="collapse3" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">

                                            <div class="from-block">
                                                <form>
                                                   

                                                    <div class="mb-3">
                                                        <div class="row">                                                           
                                                            <div class="col">
                                                                <label class="form-label">Course name
                                                                    *</label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="Course name" name="cname">
                                                            </div>
                                                            <div class="col">
                                                                <label class="form-label">Duration
                                                                    </label>
                                                                <input type="text" class="form-control"
                                                                    placeholder="duration" name="duration">
                                                            </div>
                                                            <div class="col">
                                                                <label  class="form-label">Tuition fee</label>
                                                                <input type="text" class="form-control" placeholder="tuition fee"
                                                                    name="tuitionfee">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col-md-4">                                                         
                                                                <label class="form-label">Study
                                                                    *</label>
                                                                <select type="text" class="form-control" id="salutation"
                                                                    placeholder="Salutation" name="salutation">
                                                                    <option value="">Machine Learning</option>
                                                                    <option value="Ms.">Indigenous Canada</option>
                                                                    <option value="Mr.">The Science of Well-Being</option>
                                                                    <option value="Mrs.">Introduction to Statistics</option>                                                                  
                                                                </select>                                                          
                                                            </div>
                                                            <div class="col-md-8">
                                                                <div class="row">
                                                                    <div class="col">
                                                                    <label  class="form-label">fee</label>
                                                                <input type="text" class="form-control" placeholder="fee"
                                                                    name="fee">
                                                                    </div>
                                                                    <div class="col">
                                                                    <label  class="form-label"> course level</label>
                                                                <input type="text" class="form-control" placeholder=" course level"
                                                                    name=" courselevel">
                                                                    </div>
                                                                    <div class="col">
                                                                    <label  class="form-label"> Cgpa </label>
                                                                <input type="text" class="form-control" placeholder=" Cumulative Grade Point Average "
                                                                    name=" cgpa">
                                                                    </div>
                                                                    <div class="col">
                                                                    <label  class="form-label"> Eligibilit </label>
                                                                <input type="text" class="form-control" placeholder=" eligibility(like min 55%)"
                                                                    name=" eligibility">
                                                                    </div>                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div class="form-group"><label >English Proficiency
                                                                    </label><input type="text" class="form-control"
                                                                        id="eng-pro" name="email" placeholder="English Proficiency"
                                                                        ></div>
                                                            </div>
                                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div class="form-group">
                                                                    <label>Course website </label><input
                                                                        type="text" class="form-control" id="cour-web"
                                                                        name="mobile" placeholder="Course website " value="">
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div class="form-group">
                                                                    <label>Course  Description</label>
                                                                    <textarea class="form-control" row="2" col="3"></textarea>
                                                                </div>
                                                            </div>
                                                            <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                                                <div class="form-group"><label
                                                                        >Academic proficiency exam</label><select
                                                                        class="form-control dropdown"
                                                                        id="highest_qualification"
                                                                        name="highest_qualification">
                                                                        <option value="">GRE</option>
                                                                        <option value="Diploma">GMAT</option>
                                                                        <option value="Secondary">SAT</option>
                                                                       
                                                                    </select></div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3">
                                                        <div class="row">
                                                            <div class="col-md-6"></div>
                                                            <div class="col-md-6 text-right">
                                                                <button type="button" class="btn btn-success ">Add New
                                                                </button>
                                                                <button type="button" class="btn btn-secondary">Save
                                                                </button>
                                                                <button type="button" class="btn btn-success ">Save &
                                                                    Next</button>
                                                            </div>

                                                        </div>

                                                    </div>



                                            </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="card">
                                   <a class="card-header" data-bs-toggle="collapse" href="#collapse4"><strong>4</strong>
                                   Admissions Process 
                                    </a>
                                    <div id="collapse4" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div class="formbody">
                                    <div class="row">
                                        <div class="col-lg-12 col-12 ">
                                            <h3>Application Process</h3>                            
                                    </div>
                                    <div class="trix_form_adjustement">
                                        
                                                                <form action="#" method="post" class="needs-validation form">
                                                                    <div class="row">
                                        
                                                                        <div class="col-lg-12">
                                                                            <div class="row">
                                                                                <div class="col-xl-6 col-md-12 " style="padding-right:0px !important;">
                                                                                    <div class="form-group ">
                                                                                        <label for="comment">Application:</label>
                                                                                        <textarea class="form-control editarea" row="5" col="7" ></textarea>
                                                                                    </div>


                                                                                </div>
                                                                                <div class="col-xl-6  mt-2 d-none d-xl-block" style="padding-left:0px !important;">
                                                                                    <div class="form-group">
                                                                                        <div class="EditorSide">
                                                                                            <p>Choose your relevant pre-written examples. </p>
                                                                                        </div>
                                        
                                        
                                                                                        <div class="row">
                                                                                            <div class="col-md-12">
                                                                                                <div class="WriterPoints">
                                                                                                    <!--  -->
                                                                                                    <div class="HelpPoint des_help " id="help">
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_1">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I am keen to continue my career and prepared to work hard in order to achieve my organization objectives and I hereby declare that the information furnished above is true to the best of my knowledge.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_2">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I hereby declare that all the above mentioned information given by me is true and correct to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_3">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I do hereby declare that above particulars of information and facts stated are true, correct and complete to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_4">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I do hereby declare that the above statements mentioned in my resume are true and correct to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_5">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I solemnly declare that all the above furnished information is free from error to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_6">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">All the information mentioned in the resume are correct to the best of my knowledge and believe.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                        </div>
                                        
                                                                                                </div>
                                        
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                        
                                        
                                        
                                        
                                                                        
                                                                        </div>
                                        
                                        
                                        
                                                                    
                                        
                                                                    
                                        
                                        
                                        
                                        
                                        
                                                                    </div>
                                                                </form>
                                                                
                                    </div>                        
                                  </div>
                                    </div>
                                    </div>
                                </div>
                                <div class="card">
                                   <a class="card-header" data-bs-toggle="collapse" href="#collapse5"><strong>5</strong>
                                   Documents Required
                                    </a>
                                    <div id="collapse5" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div class="formbody">
                                    <div class="row">
                                        <div class="col-lg-12 col-12 ">
                                            <h3>   Documents Required</h3>                            
                                    </div>
                                    <div class="trix_form_adjustement">
                                        
                                                                <form action="#" method="post" class="needs-validation form">
                                                                    <div class="row">
                                        
                                                                        <div class="col-lg-12">
                                                                            <div class="row">
                                                                                <div class="col-xl-6 col-md-12 " style="padding-right:0px !important;">
                                                                                    <div class="form-group ">
                                                                                        <label for="comment">Documents:</label>
                                                                                        <textarea class="form-control editarea" row="5" col="7" ></textarea>
                                                                                    </div>


                                                                                </div>
                                                                                <div class="col-xl-6  mt-2 d-none d-xl-block" style="padding-left:0px !important;">
                                                                                    <div class="form-group">
                                                                                        <div class="EditorSide">
                                                                                            <p>Choose your relevant pre-written examples. </p>
                                                                                        </div>
                                        
                                        
                                                                                        <div class="row">
                                                                                            <div class="col-md-12">
                                                                                                <div class="WriterPoints">
                                                                                                    <!--  -->
                                                                                                    <div class="HelpPoint des_help " id="help">
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_1">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I am keen to continue my career and prepared to work hard in order to achieve my organization objectives and I hereby declare that the information furnished above is true to the best of my knowledge.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_2">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I hereby declare that all the above mentioned information given by me is true and correct to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_3">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I do hereby declare that above particulars of information and facts stated are true, correct and complete to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_4">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I do hereby declare that the above statements mentioned in my resume are true and correct to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_5">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I solemnly declare that all the above furnished information is free from error to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_6">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">All the information mentioned in the resume are correct to the best of my knowledge and believe.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                        </div>
                                        
                                                                                                </div>
                                        
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>

                                        
                                        
                                        
                                        
                                                                        
                                                                        </div>
                                        
                                        
                                        
                                                                    
                                        
                                                                    
                                        
                                        
                                        
                                        
                                        
                                                                    </div>
                                                                </form>
                                                                
                                    </div>                        
                                  </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <a class="card-header" data-bs-toggle="collapse" href="#collapse6"><strong>6</strong>
                                    Ranking 
                                    </a>
                                    <div id="collapse6" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div class="from-block">
                                                    <form>   
                                                          <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label for="fname" class="form-label">Agency Name</label>
                                                                  <input type="text" class="form-control" placeholder="" name="agname">
                                                                </div>
                                                                <div class="col">
                                                                    <label for="lname" class="form-label">Rank</label>
                                                                  <input type="text" class="form-control" placeholder="" name="rank">
                                                                </div>
                                                                <div class="col">
                                                                    <label for="lname" class="form-label">Year</label>
                                                                  <input type="text" class="form-control" placeholder="" name="rank">
                                                                </div>                                                               
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col">
                                                                <span class="documentUpload ant-upload-picture-card-wrapper">
                                                                <div class="ant-upload-list ant-upload-list-picture-card">
                                                                </div>
                                                                <div class="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                    <span tabindex="0" class="ant-upload" role="button">
                                                                        <input type="file" accept="">
                                                                        <p>
                                                                            Upload/Drag &amp; Drop here</p>
                                                                    </span>
                                                                </div>
                                                            </span>
                                                                </div>
                                                              
                                                              </div>
                                                          </div>
                                                     
                                                          <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col-md-6"></div>
                                                                <div class="col-md-6 text-right">
                                                                <button type="button" class="btn btn-success ">Add New
                                                                </button>
                                                                <button type="button" class="btn btn-secondary">Save
                                                                </button>
                                                                <button type="button" class="btn btn-success ">Save &
                                                                    Next</button>
                                                                </div>
                                                            </div>
                                                          </div>
                                                     </form>
                                                </div>
                                        </div>
                                    </div>


                                </div>

                                <div class="card">
                                   <a class="card-header" data-bs-toggle="collapse" href="#collapse7"><strong>7</strong>
                                   Images/Video
                                    </a>
                                    <div id="collapse7" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-10">
                                                <span class="documentUpload ant-upload-picture-card-wrapper" style="width:100%;">
                                                                <div class="ant-upload-list ant-upload-list-picture-card">
                                                                </div>
                                                                <div class="ant-upload ant-upload-select ant-upload-select-picture-card">
                                                                    <span tabindex="0" class="ant-upload" role="button">
                                                                        <input type="file" accept="">
                                                                        <p>
                                                                            Upload/Drag &amp; Drop here</p>
                                                                    </span>
                                                                </div>
                                                            </span>
                                                </div>
                                                <div class="col-md-2">

                                                </div>
                                            </div>
                                       
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <a class="card-header" data-bs-toggle="collapse" href="#collapse8"><strong>8</strong>
                                    Scholarship
                                    </a>
                                    <div id="collapse8" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                                    <div class="form-check form-check-inline">
                                                     <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked="">
                                                    <label class="form-check-label" for="flexRadioDefault1">
                                                         YES
                                                    </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                                                       <label class="form-check-label" for="flexRadioDefault2">
                                                         NO
                                                       </label>
                                                    </div>


                                                    <div class="row">
                                        
                                                                        <div class="col-lg-12">
                                                                            <div class="row">
                                                                                <div class="col-xl-6 col-md-12 " style="padding-right:0px !important;">
                                                                                    <div class="form-group ">
                                                                                        <label for="comment">Documents:</label>
                                                                                        <textarea class="form-control editarea" row="5" col="7"></textarea>
                                                                                    </div>


                                                                                </div>
                                                                                <div class="col-xl-6  mt-2 d-none d-xl-block" style="padding-left:0px !important;">
                                                                                    <div class="form-group">
                                                                                        <div class="EditorSide">
                                                                                            <p>Choose your relevant pre-written examples. </p>
                                                                                        </div>
                                        
                                        
                                                                                        <div class="row">
                                                                                            <div class="col-md-12">
                                                                                                <div class="WriterPoints">
                                                                                                    <!--  -->
                                                                                                    <div class="HelpPoint des_help " id="help">
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_1">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I am keen to continue my career and prepared to work hard in order to achieve my organization objectives and I hereby declare that the information furnished above is true to the best of my knowledge.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_2">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I hereby declare that all the above mentioned information given by me is true and correct to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_3">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I do hereby declare that above particulars of information and facts stated are true, correct and complete to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_4">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I do hereby declare that the above statements mentioned in my resume are true and correct to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_5">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">I solemnly declare that all the above furnished information is free from error to the best of my knowledge and belief.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                                <div class="rowx mt-3 ml-2 border border-secondary help_content" onclick="insert_text(this.id)" id="content_6">
                                                                                                                <div class="col-sm-2x ">
                                                                                                                    <p class="VerticalText m-0"> ADD </p>
                                                                                                                </div>
                                                                                                                <div class="col-sm-10x p-0 ">
                                                                                                                    <p class="m-0 help_text">All the information mentioned in the resume are correct to the best of my knowledge and believe.</p>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                                                                                        </div>
                                        
                                                                                                </div>
                                        
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>    
                                                                        
                                                                        </div>
                                        
                                        
                                                                    </div>

                                                     </div>
                                     </div>
                                </div>

                                <div class="card">
                                   <a class="card-header" data-bs-toggle="collapse" href="#collapse9"><strong>9</strong>
                                   Set Commision
                                    </a>
                                    <div id="collapse9" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div class="from-block">
                                                    <form>   
                                                          <div class="mb-3">
                                                            <div class="row">
                                                                <div class="col">
                                                                    <label class="form-label">Enter Amount</label>
                                                                  <input type="text" class="form-control" placeholder="" name="enteramount">
                                                                </div>
                                                                <div class="col">
                                                                    <label class="form-label"> Enter commission</label>
                                                                  <input type="text" class="form-control" placeholder="" name="entercommission">
                                                                </div>
                                                                <div class="col">
                                                                    <label for="lname" class="form-label">Percentage </label>
                                                                  <input type="text" class="form-control" placeholder="" name="percentage ">
                                                                </div>                                                               
                                                              </div>
                                                          </div>
                                                          <div class="mb-3">
                                                          <div class="row">
                                                                <div class="col-md-6"></div>
                                                                <div class="col-md-6 text-right">
                                                                <button type="button" class="btn btn-success ">Add New
                                                                </button>
                                                                <button type="button" class="btn btn-secondary">Save
                                                                </button>
                                                                <button type="button" class="btn btn-success ">Save &
                                                                    Next</button>
                                                                </div>
                                                            </div>
                                                          </div>
                                                     </form>
                                                </div>
                                        </div>
                                    </div>  
                                </div>


                                <div class="card">
                                    <a class="card-header" data-bs-toggle="collapse" href="#collapse10"><strong>10</strong>
                                    Miscellaneous Information
                                    </a>
                                    <div id="collapse10" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div class="misl-list">
                                          <ul>
                                            <li><strong>Campus</strong>Rimt university</li>
                                            <li><strong>Eligibilit Year for UG</strong>2020</li>
                                            <li><strong>Eligibilit Year for PG</strong>2017</li>
                                            <li><strong>CAS Deposit</strong>50 GBP</li>
                                            <li><strong>Undergraduate Score Requirements</strong>70%</li>
                                            <li><strong>Postgraduate Score Requirements</strong>70%</li>
                                            <li><strong>IELTS for UG</strong>5.5/6</li>
                                            <li><strong>IELTS for PG</strong>5.5/6</li>
                                            <li><strong>PTE for UG</strong>59/59</li>
                                            <li><strong>PTE for PG</strong>59/59</li>
                                            <li><strong>Intake Available</strong>Jan/Sep</li>
                                          </ul>
                                        </div>
                                        </div>      

                                </div>

                                <div class="card">
                                    <a class="card-header" data-bs-toggle="collapse" href="#collapse11"><strong>11</strong>
                                    Setting
                                    </a>
                                    <div id="collapse11" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div class="form-block">
                                                <div class="card-body">
                                                <h1 class="h3 mb-3 text-gray-800">Change Password</h1>
                                                <div class="col-sm-12">
                                                  
                                                   
                                                   <div class="row">
                                                       <div class="col-sm-12">
                                                        <form>
                                                            <div class="row">
                                                            <div class="col-sm-12 ">
                                                                <div class="form-group">
                                                                    <label for="password">Enter Password</label>
                                                                    <input required="" name="password" type="password" id="password" class="form-control" value="">
                                                                </div></div>
                                                                <div class="col-sm-12">
                                                                    <div class="form-group">
                                                                        <label for="c_password">Confirm Password</label>
                                                                        <input required="" name="c_password" type="password" id="c_password" class="form-control" value="">                                                                        
                                                                    </div></div><div class="col-sm-12 text-danger"></div><div class="col-sm-12"><button type="submit" class="btn btn-success">Save</button></div></div></form></div></div></div>
                                            </div>
                                   </div>
                                        </div>
                                    </div>

                                </div>


                                <!-- <div class="card">
                             
                                   <a class="card-header" data-bs-toggle="collapse" href="#collapse12">
                                   FAQ
                                    </a>
                                    <div id="collapse12" class="collapse" data-bs-parent="#accordion">
                                        <div class="card-body">
                                        <div id="accordion">
                                        <div class="card">
                                          <a class="card-header collapsed" data-bs-toggle="collapse" href="#collapsefaq1" aria-expanded="false">                                        
                                          What should I do after registering for Coursementor?                                        
                                        </a>
                                          <div id="collapsefaq1" class="collapse" data-bs-parent="#accordion" style="">
                                            <div class="card-body">
                                              <p>Once you have registered, the next step is to complete your profile. Based on your preferred study location and course, you will get a list of universities that perfectly match your profile. Shortlist universities that interest you, prepare queries regarding the application, scholarship, eligibility, etc. and attend the upcoming Coursementor to interact 1:1 with university representatives.</p>
                                            </div>
                                          </div>
                                        </div>
                                        <div class="card">
                                          <a class="card-header collapsed" data-bs-toggle="collapse" href="#collapsefaq2" aria-expanded="false">                                        
                                          What do you need to do before attending the Coursementor event? 
                                          </a>                                         
                                          <div id="collapsefaq2" class="collapse" data-bs-parent="#accordion">
                                            <div class="card-body">
                                            <p>You will be interacting directly with the university representatives in the Coursementor event. Prepare a list of questions around your course, application, scholarship, fees, or any other study abroad query. The university admission experts are there to help you throughout the application process and enlighten you on the student life at their university.</p>
                                            </div>
                                          </div>
                                        </div>
                                       
                                      </div>
                                        </div>
                                    </div>
                                </div> -->










                            </div>


                            <!-- -------------- -->
                        </div>
                    </div>
                    <!-- Card Body -->

                </div>
            </div>


        </div>


    </div>
    <!-- /.container-fluid -->

    <?php include 'dashboard-footer.php'; ?>