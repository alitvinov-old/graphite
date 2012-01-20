<div class="page-wrap">

  <?php if ($page['sidebar_first']): ?>
  <div id="sidebar" class="sidebar">
    <?php print render($page['sidebar_first']); ?>
  </div>
  <?php endif; ?>
  <?php if ($page['sidebar_second']): ?>
  <div id="sidebar-second" class="sidebar">
    <?php print render($page['sidebar_second']); ?>
  </div>
  <?php endif; ?>
  
  <div id="content">
    <?php if ($primary_local_tasks): ?>
      <?php print render($primary_local_tasks); ?>  
    <?php endif; ?> 
    
    <h1 class="page-title"><?php print $title ?></h1>
    
    <?php print $breadcrumb; ?>
    
    <div id="page">
      <?php if ($secondary_local_tasks): ?>
      <?php print render($secondary_local_tasks); ?>
      <?php endif; ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['help']); ?>
      <?php print render($page['content']); ?>
    </div> 
  </div>
  
  <div id="footer"><div class="footer-wrap">
    <?php print render($page['footer']); ?>
  </div></div>

</div>