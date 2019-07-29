import React from 'react';

const Write = ()=>{
    return (
        <div class="card gedf-card">
            <div class="card-header">
            </div>
            <div class="card-body">
                <form action="/board/post_" method="post" enctype="multipart/form-data">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                            <div class="form-group">
                                <label class="sr-only" for="message">board</label>
                                <textarea name="content" class="form-control" id="message" rows="3" placeholder="What are you thinking?"></textarea>
                                <input name = "image" type="file" accept = "image/*" class="file-input" id="fileInput"/>
                                <input name = "writer" type="hidden" value="<%=email%>"/>
                            </div>
                            <div class="btn-group">
                                <button type="submit" class="btn btn-primary">게시</button> &nbsp;
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Write;