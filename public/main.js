$(()=>{
    // CREATE/POST
    $('#send-form').on('click', function(event) {
        // event.preventDefault();

        let actorName = $('input[name="actorName"]'),
            sex = $('input[name="sex"]:checked'),
            dob = $('input[name="DOB"]'),
            bio = $('textarea[name="bio"]');



        $.ajax({
            url: '/actors/new',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ 
                name: actorName.val(),
                sex : sex.val(),
                dob : dob.val(),
                bio : bio.val()
            }),
            success: function(response) {
                console.log(response);
                actorName.val('');
                sex.prop('checked',false);
                dob.val('');
                bio.val('');
                appendActor();
                $('#close').click();
            }
        });
        // console.log(actorName,sex,dob,bio);
    });
    function appendActor(){
        console.log('I am running');
        $.ajax({
            url: '/actors',
            contentType: 'application/json',
            success: function(response) {
                const select = $('select[name="cast"]');
                // const nonSelectedWrapper = $('.non-selected-wrapper');
                const searchInput = $('.search-input');
    
                select.html('');
                // console.log(select,response);
                response.actorData.forEach(function(actor) {
                    select.append(
                    `<option value='${actor._id}'>${actor.Name}</option>`
                    );
                // let i = -1;
                // nonSelectedWrapper.html('');
                // response.actorData.forEach(function(actor){
                //     nonSelectedWrapper.append(
                //         `<a tabindex="0" class="item" role="button" data-value="${actor._id}" multi-index="${i++}">${actor.Name}</a>`
                //     );
                // })
                    console.log(actor);
                });
            }
        });
    }
}); 